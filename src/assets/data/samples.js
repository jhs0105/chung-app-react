import sample01 from "../images/sample01.jpg";
import sample02 from "../images/sample02.jpg";
import sample03 from "../images/sample03.jpg";
import sample04 from "../images/sample04.jpg";
import sample05 from "../images/sample05.jpg";
import subimage01 from "../images/ico_dis01.png";
import subimage02 from "../images/ico_dis02.png";
import subimage03 from "../images/ico_dis03.png";
import subimage04 from "../images/ico_dis04.png";

export const samples = [
  {
    title: "아침식사 대용으로\n강력추천",
    subImage: `${subimage01}`,
    image: `${sample01}`,
    name: "베지밀 17곡 한끼두유",
    category: [
      { title: "베지밀", color: "#00A256" },
      { title: "곡물&견과두유", color: "#eee" },
    ],
    tag: ["17가지국내산곡물", "한끼대용", "미숫가루두유"],
  },
  {
    title: "건강하게! 맛있게!\n요리용 제품",
    subImage: `${subimage02}`,
    image: `${sample02}`,
    name: "정식품 진한 콩국물",
    category: [
      { title: "진한콩국물", color: "#E3A62C" },
      { title: "콩국물", color: "#eee" },
    ],
    tag: ["식품성건강식재료", "콩의맛과영양", "여름대표요리"],
  },
  {
    title: "체계적이고 과학적인\n영양밸런스",
    subImage: `${subimage03}`,
    image: `${sample03}`,
    name: "그린비아 프로틴밀 아몬드와 호두",
    category: [
      { title: "그린비아", color: "#7375FB" },
      { title: "건강식품", color: "#eee" },
    ],
    tag: ["아몬드와호두", "부담없는단백질섭취", "고단백균형영양"],
  },
  {
    title: "식이섬유\n섭취 부족시",
    subImage: `${subimage04}`,
    image: `${sample04}`,
    name: "프리바이오틱스 두유",
    category: [
      { title: "베지밀", color: "#00A256" },
      { title: "건강식품", color: "#eee" },
    ],
    tag: ["프리바이오틱스", "식이섬유충전", "프리미엄두유"],
  },
  {
    title: "평소 단백질 섭취가\n부족하다면?",
    subImage: `${subimage03}`,
    image: `${sample05}`,
    name: "베지밀 고단백두유 검은콩",
    category: [
      { title: "베지밀", color: "#00A256" },
      { title: "블랙두유", color: "#eee" },
    ],
    tag: ["베지밀 고단백두유 검은콩", "든든하고고소한맛", "운동전후단백질"],
  },
];
