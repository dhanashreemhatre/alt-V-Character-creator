Vue.component('tab-done', {
    props: ['data'],
    methods: {
      // Save the character data
      saveCharacter() {
        // Map displayed indices to actual indices when saving
        const mappedData = { ...this.data };
        mappedData.faceFather = this.getFaceIndex(this.data.faceFather, 'male');
        mappedData.faceMother = this.getFaceIndex(this.data.faceMother, 'female');
        mappedData.skinFather = this.getFaceIndex(this.data.skinFather, 'male');
        mappedData.skinMother = this.getFaceIndex(this.data.skinMother, 'female');
  
        if ('alt' in window) {
          alt.emit('character:Done', mappedData); // Emit the mapped data
        }
      },
  
      // Discard the character creation
      discardCharacter() {
        if ('alt' in window) {
          alt.emit('character:Cancel');
        }
      },
  
      // Import character data
      importCharacter() {
        const characterJSON = this.$refs.textarea.value;
        let character;
        try {
          character = JSON.parse(characterJSON);
        } catch (err) {
          this.$refs.textarea.value = `INVALID CHARACTER JSON CODE. RESETTING...`;
  
          if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
          }
  
          this.timeout = setTimeout(() => {
            this.$refs.textarea.value = JSON.stringify(this.data, null, '\t');
          }, 2500);
          return;
        }
  
        // Update displayed indices and other data
        Object.keys(character).forEach((key) => {
          this.data[key] = character[key];
        });
  
        this.$root.$emit('updateCharacter');
        this.$root.$emit('resetSelection');
      },
  
      // Copy all character code to clipboard
      copyAll() {
        this.$refs.textarea.select();
        document.execCommand('copy');
      },
  
      // Helper method to map father and mother indices to their respective list
      getFaceIndex(index, type) {
        const maleIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 42, 43, 44];
        const femaleIndices = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45];
  
        if (type === 'male') {
          return maleIndices[index] !== undefined ? maleIndices[index] : index; // Default to index if not found
        } else if (type === 'female') {
          return femaleIndices[index] !== undefined ? femaleIndices[index] : index; // Default to index if not found
        }
        return index;
      },
    },
    template: `
      <div class="options">
        <p>All finished designing your character?</p>
        <div class="option">
          <button class="full" @click="saveCharacter" style="margin-bottom: 12px">Save</button>
          <button class="full danger" @click="discardCharacter">Discard</button>
        </div>
        <div class="option">
          <div class="label">Character Code (Optional)</div>
          <textarea ref="textarea">{{ JSON.stringify(data, null, '\t') }}</textarea>
          <button class="full copy" @click="copyAll" style="margin-top: 12px">Copy Character Code</button>
          <button class="full copy" @click="importCharacter" style="margin-top: 12px">Import Code</button>
        </div>
      </div>
    `
  });
  