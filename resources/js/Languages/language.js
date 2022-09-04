/* Flags */
import flagEn from "@/Languages/Flags/flagEn.vue";
import flagTr from "@/Languages/Flags/flagTr.vue";

const flags = {
    flagEn: flagEn,
    flagTr: flagTr,
};

/* Languages */
const languages = [
    { id: "en", name: "English", flag: "flagEn" },
    { id: "tr", name: "Türkçe", flag: "flagTr" },
];

export { languages, flags };
