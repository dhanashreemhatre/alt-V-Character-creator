Vue.component('tab-sex', {
    props: ['data'],
    methods: {
        isActive(parameter, value) {
            if (this.data[parameter] === value) {
                return { active: true };
            }

            return { active: false };
        },
        setParameter(parameter, value) {
            if (parameter === 'sex') {
                if (value === 0) {
                    this.data.faceFather = 1;
                    this.data.faceMother = 23;
                    this.data.skinFather = 1;
                    this.data.skinMother = 23;
                    this.data.skinMix = 0.5;
                    this.data.faceMix = 0.5;
                    this.data.facialHair = 29;
                    this.data.facialHairColor1 = 0;
                    this.data.eyebrows = 0;
                } else {
                    this.data.faceFather = 0;
                    this.data.faceMother = 25;
                    this.data.skinFather = 0;
                    this.data.skinMother = 25;
                    this.data.skinMix = 0.5;
                    this.data.faceMix = 0.5;
                    this.data.facialHair = 29;
                    this.data.facialHairColor1 = 0;
                    this.data.eyebrows = 0;
                }
            }

            if (parameter === 'preset') {
                const index = parseInt(value - 1);
                const preset = this.data.sex === 0 ? femalePresets[index] : malePresets[index];
                Object.keys(preset).forEach(key => {
                    this.data[key] = preset[key];
                });

                this.data.facialHair = 29;
                this.data.facialHairColor1 = 0;
                this.data.eyebrows = 0;
            } else {
                if (isNaN(value)) {
                    this.data[parameter] = value;
                } else {
                    this.data[parameter] = parseFloat(value);
                }
            }

            this.$root.$emit('updateCharacter');
        },
        decrementParameter(parameter, min, max, incrementValue) {
            this.data[parameter] -= incrementValue;

            if (this.data[parameter] < min) {
                this.data[parameter] = max;
            }

            this.$root.$emit('updateCharacter');
        },
        incrementParameter(parameter, min, max, incrementValue) {
            this.data[parameter] += incrementValue;

            if (this.data[parameter] > max) {
                this.data[parameter] = min;
            }

            this.$root.$emit('updateCharacter');
        },
        getImage(sex, id) {
            const basePath = "assets/character/";
            const genderPath = sex === 0 ? "female/" : "male/";
            const namesArray = sex === 0 ? femaleNames : maleNames;
        
            if (id >= 0 && id < namesArray.length) {
                console.log(`ID: ${namesArray[id]}`);
                return `${basePath}${genderPath}${namesArray[id].toLowerCase()}.jpeg`;
            } else {
                console.error(`Invalid ID: ${id}`);
                return `${basePath}${genderPath}default.jpeg`; // Fallback for invalid IDs
            }
        }
        
    },
    watch: {
        'data.faceMix': function(newVal, oldVal) {
            this.$root.$emit('updateCharacter');
        },
        'data.skinMix': function(newVal, oldVal) {
            this.$root.$emit('updateCharacter');
        }
    },
    template: `
        <div class="options">
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Select Sex
                    </div>
                    <div class="value">
                        {{ data.sex === 0 ? 'Female' : 'Male' }}
                    </div>
                </div>
                <div class="split">
                    <button @click="setParameter('sex', 0)" :class="isActive('sex', 0)" id="sex-selector" class="women"><img src="assets/sex/woman-avatar.png"/>Female</button>
                    <button @click="setParameter('sex', 1)" :class="isActive('sex', 1)" id="sex-selector" class="men"><img src="assets/sex/male-user.png"/>Male</button>
                </div>
               <!-- 
               <div class="label" style="margin-top: 6px">
                    Presets
                </div>
                <div class="split-auto">
                    <button class="preset-btn" v-for="i in 6" :key="i" @click="setParameter('preset', i)">
                        {{ i }}
                    </button>
                </div>
                -->
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Father Face
                    </div>
                    <div class="value">
                        {{ data.faceFather }} | 22
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('faceFather', 0, 22, 1)">&#8249;</button>
                
                    <img :src="getImage(1, data.faceFather)" :alt="maleNames[0][data.faceFather]" height="78" />
                    <button class="arrowRight" @click="incrementParameter('faceFather', 0, 22, 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Father Skin
                    </div>
                    <div class="value">
                        {{ data.skinFather }} | 22
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('skinFather', 0, 22, 1)">&#8249;</button>
                    <img :src="getImage(1, data.skinFather)" :alt="faceNames[data.skinFather]" height="78" />
                    <button class="arrowRight" @click="incrementParameter('skinFather', 0, 22, 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Mother Face
                    </div>
                    <div class="value">
                        {{ data.faceMother }} | 22
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('faceMother', 0, 22, 1)">&#8249;</button>
                    <img :src="getImage(0, data.faceMother)" :alt="faceNames[data.faceMother]" height="78" />
                    <button class="arrowRight" @click="incrementParameter('faceMother', 0, 22, 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Mother Skin
                    </div>
                    <div class="value">
                        {{ data.skinMother }} | 22
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('skinMother', 0, 22, 1)">&#8249;</button>
                   <img :src="getImage(0, data.skinMother)" :alt="faceNames[data.skinMother]" height="78" />
                    <button class="arrowRight" @click="incrementParameter('skinMother', 0, 22, 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                       Face Mix
                    </div>
                    <div class="value">
                        {{ parseFloat(data.faceMix).toFixed(1) }} | 1.0
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" min="0" max="1" step="0.1" v-model.number="data.faceMix"/>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                       Skin Mix
                    </div>
                    <div class="value">
                        {{ parseFloat(data.skinMix).toFixed(1) }} | 1.0
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" min="0.0" max="1.0" step="0.1" v-model.number="data.skinMix"/>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Eye Color
                    </div>
                    <div class="value">
                         {{ eyeColors[data.eyes] }} | {{ data.eyes }}
                    </div>
                </div>
                <div class="controls">
        <button class="arrowLeft" @click="decrementParameter('eyes', 0, eyeColors.length - 1, 1)">&#8249;</button>
        <span>
          <div
            class="color-preview"
             :style="{ backgroundColor: eyeColors[data.eyes] }"
          ></div>
          {{ eyeColors[data.eyes] }}
        </span>
        <button class="arrowRight" @click="incrementParameter('eyes', 0, eyeColors.length - 1, 1)">&#8250;</button>
      </div>
            </div>
        </div>
    `
});
