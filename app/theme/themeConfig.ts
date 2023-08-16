// theme/themeConfig.ts
import type { ThemeConfig } from "antd";
import { COLORS } from "./color";


const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    fontFamily: "Carlito",
    colorText: COLORS.TEXT,
  },
  components: {
    Button: {
      colorBgBase: COLORS.MAIN,
      colorText: COLORS.TEXT,
    },
    Layout: {
      colorBgHeader: COLORS.WHITE,
    },
    Typography: {},
  },
};

export default theme;
