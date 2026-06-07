import type { Section } from "@/lib/types";
import s01 from "./sec01";
import s02 from "./sec02";
import s03 from "./sec03";
import s04 from "./sec04";
import s05 from "./sec05";
import s06 from "./sec06";
import s07 from "./sec07";
import s08 from "./sec08";
import s09 from "./sec09";
import s10 from "./sec10";
import s11 from "./sec11";
import s12 from "./sec12";
import s13 from "./sec13";
import s14 from "./sec14";
import s15 from "./sec15";
import s16 from "./sec16";
import s17 from "./sec17";
import s18 from "./sec18";
import s19 from "./sec19";
import s20 from "./sec20";

export const SECTIONS: Section[] = [
  s01, s02, s03, s04, s05, s06, s07, s08, s09, s10,
  s11, s12, s13, s14, s15, s16, s17, s18, s19, s20,
].sort((a, b) => a.num - b.num);
