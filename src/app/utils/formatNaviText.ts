// Viene un string "Caracteristicas" y quiero conseguir la parte del centro de esos string para poder cambiarlo de color.
// Deberia obtener los nombres de las categorias y despues usarlo como key de la siguiente manera?

// const formattedCategories = [
//   {
//     Categorias: {
//       start: "Cate", // 40%
//       mid: "go", // 30%
//       end: "rias" // 40%
//     },
//   },
// ];

export default function splitText(title: string) {
  const charLength = title.length;
  const char40Percent = (charLength * 40) / 100;
  const char20Percent = (charLength * 30) / 100;
  const startChar = title.substring(0, char40Percent);
  const midChar = title.substring(char40Percent, char40Percent + char20Percent);
  const endChar = title.substring(char40Percent + char20Percent);
  return {
    title: {
      startChar,
      midChar,
      endChar,
    },
  };
}
