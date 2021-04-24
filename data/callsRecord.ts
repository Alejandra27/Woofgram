export interface callRecord {
  id: string;
  type: string;
  profilePicUrl: string;
  profileName: string;
  status: string;
  day: string;
  info: string;
}

const CallsList: Array<callRecord> = [
  {
    id: "1",
    type:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB9klEQVRIie2Uv2sUURDHP/Pu1GAMFl40t1fdImkUuVqLE8sU2mgjCLaC2EaE27zbFLG09C+wNoYIguAPECxVBEHies2tv8BCLaK57Fh4F3f39nYXsdNvN++9mc/MzszCfxVI4kbYaT5A5GTs6IeiZxv+27W8IH3PtQ0/sFl3JomT46n73YJpl8hy6Z3nXi8GwJf0AxU9UAQAUFjse+5YFdWU3QNqieyUY3E79FydBBlWMlX3g6ujs0QFKrzM8Gt9tEf25SSfUASbcTtRgYnkkYpeTLro81lmd5wcPxBSGlWl0E03O9mDgawDW78P5FXV6ILYh4OizAUyJykBqK9sfAK9OzTfyJa0D9re+6LgCt26H3Sz7tJThDE6Grc59gymi4IDTNqBTMCc7T0F1oFpjeRGGUCexgAAFVO9AnwDOdP33MW/DjhkXweoXgIQWAm95oWsd3qOSmidvXmAsZGLK/SaPkgHUJRrznKw8zsI7XyNaHAPaAHPVHgh8FnVPG74G6ulAAD9JbcrigcgKneiiMsmkk12RfeV5JYP9d3xg6nSAICw455HuAnMAF8FPigcnvQ+voyZPRhzWA5uVUy1JbAGzOQFT6sUAH41vu4Hp9XICZTbJDZ+skp9oiyFdr4m29sLGG2rchRoAvuBJ44fnPrTuP+gfgKC2aBNrqqOXAAAAABJRU5ErkJggg==",
    profilePicUrl:
      "https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900",
    profileName: "Maxuimus",
    status: "Missed",
    day: "Tue",
    info:
      "https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
  }
];

export default CallsList;
