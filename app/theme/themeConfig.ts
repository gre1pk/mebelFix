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
      colorText: COLORS.TEXT,
      colorBgContainer: COLORS.MAIN,
      colorLinkHover: COLORS.MAIN,
      colorBorder: COLORS.MAIN,
      colorPrimaryHover: COLORS.MAIN_LIGHT,
      colorPrimary: COLORS.MAIN,
      colorPrimaryActive: COLORS.MAIN_GREY,
    },
    Layout: {
      colorBgHeader: COLORS.WHITE,
      paddingContentHorizontal: 10,
      // Header: {}
    },

    Typography: {},
  },
};

export default theme;
