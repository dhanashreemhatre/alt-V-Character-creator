const app = new Vue({
    el: '#app',
    data() {
        return {
            show: false,
            selection: 0,
            data: {
                sex: 0, // 0 for female, 1 for male
                faceFather: 0,
                faceMother: 0,
                skinFather: 0,
                skinMother: 0,
                faceMix: 0.5,
                skinMix: 0.5,
                structure: new Array(20).fill(0),
                hair: 11,
                hairColor1: 5,
                hairColor2: 2,
                hairOverlay: {
                    "collection": "multiplayer_overlays",
                    "overlay": "NG_F_Hair_011"
                },
                facialHair: 29,
                facialHairColor1: 62,
                facialHairOpacity: 0,
                eyebrows: 0,
                eyebrowsOpacity: 1,
                eyebrowsColor1: 0,
                eyes: 0,
                opacityOverlays: [],
                colorOverlays: []
            },
            navOptions: ['Sex', 'Structure', 'Hair', 'Overlays', 'Decor', 'Done']
        };
    },
    computed: {
        isInactiveNext() {
            return { inactive: this.selection >= this.navOptions.length - 1 };
        },
        isInactiveBack() {
            return { inactive: this.selection <= 0 };
        },
        getTabComponent() {
            return `tab-${this.navOptions[this.selection].toLowerCase()}`;
        }
    },
    watch: {
        'data.sex': function (newValue) {
            // Update hair overlay dynamically when sex changes
            this.updateHairOverlay();
        },
        'data.hair': function () {
            // Update hair overlay dynamically when hair changes
            this.updateHairOverlay();
        }
    },
    methods: {
        setReady() {
            if (!this.show) {
                this.show = true;
                if ('alt' in window) {
                    alt.emit('character:ReadyDone');
                }
            }
        },
        setData(oldData) {
            if (!oldData) {
                this.updateCharacter();
                return;
            }

            this.data = { ...this.data, ...oldData };
            this.updateCharacter();
        },
        goNext() {
            if (this.selection < this.navOptions.length - 1) {
                this.selection += 1;
            }
        },
        goBack() {
            if (this.selection > 0) {
                this.selection -= 1;
            }
        },
        updateCharacter() {
            this.updateHairOverlay();

            if (this.data.sex === 0) {
                this.data.facialHair = 30;
                this.data.facialHairOpacity = 0;
            }

            this.data.skinMix = parseFloat(this.data.skinMix);
            this.data.faceMix = parseFloat(this.data.faceMix);

            if ('alt' in window) {
                alt.emit('character:Sync', this.data);
            }
        },
        updateHairOverlay() {
            const isFemale = this.data.sex === 0;
            this.data.hairOverlay = isFemale
                ? femaleHairOverlays[this.data.hair] || ''
                : maleHairOverlays[this.data.hair] || '';
        },
        resetSelection() {
            this.selection = 0;
        }
    },
    mounted() {
        this.$root.$on('updateCharacter', this.updateCharacter);
        this.$root.$on('resetSelection', this.resetSelection);

        opacityOverlays.forEach(overlay => {
            const overlayData = { ...overlay };
            overlayData.value = 0;
            delete overlayData.key;
            delete overlayData.max;
            delete overlayData.min;
            delete overlayData.label;
            delete overlayData.increment;

            this.data.opacityOverlays.push(overlayData);
        });

        colorOverlays.forEach(overlay => {
            const overlayData = { ...overlay };
            overlayData.value = 0;
            delete overlayData.key;
            delete overlayData.max;
            delete overlayData.min;
            delete overlayData.label;
            delete overlayData.increment;

            this.data.colorOverlays.push(overlayData);
        });

        if ('alt' in window) {
            alt.on('character:Ready', this.setReady);
            alt.on('character:SetData', this.setData);
        } else {
            this.show = true;
        }
    }
});
