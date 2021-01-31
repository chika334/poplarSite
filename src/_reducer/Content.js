import {
  SET_SIDEBAR_SHADOW,
  SET_SIDEBAR_STYLE,
  SET_SIDEBAR_FOOTER,
  SET_SIDEBAR_TOGGLE,
  SET_SIDEBAR_FIXED,
  SET_SIDEBAR_USERBOX,
  SET_HEADER_FIXED,
  SET_HEADER_SHADOW,
  SET_HEADER_BG_TRANSPARENT,
  SET_HEADER_SEARCH_HOVER,
  SET_HEADER_DRAWER_TOGGLE,
  SET_SIDEBAR_TOGGLE_MOBILE,
  SET_THEME_CONFIGURATOR_TOGGLE,
  SET_FOOTER_FIXED,
  SET_FOOTER_SHADOW,
  SET_FOOTER_BG_TRANSPARENT,
  SET_PAGE_TITLE_STYLE,
  SET_PAGE_TITLE_BACKGROUND,
  SET_PAGE_TITLE_SHADOW,
  SET_PAGE_TITLE_ICON_BOX,
  SET_PAGE_TITLE_DESCRIPTION,
  SET_CONTENT_BACKGROUND
} from "../_actions/type";

const initialState = {
  // Sidebar
  sidebarFixed: true,
  sidebarFooter: true,
  sidebarShadow: false,
  sidebarStyle: "app-sidebar--dark bg-deep-sky",
  sidebarToggleMobile: false,
  sidebarToggle: false,

  // Header
  headerFixed: true,
  headerShadow: true,
  headerBgTransparent: true,
  headerSearchHover: false,
  headerDrawerToggle: false,

  // Main content
  contentBackground: "",
  themeConfiguratorToggle: false,

  // Footer
  footerFixed: false,
  footerShadow: false,
  footerBgTransparent: true,

  // Page title
  pageTitleStyle: "",
  pageTitleBackground: "",
  pageTitleShadow: false,
  pageTitleIconBox: true,
  pageTitleDescription: true,
};

function authReducer (state = initialState, action) {
  switch (action.type) {
    // Sidebar
    case SET_SIDEBAR_SHADOW:
      return {
        ...state,
        sidebarShadow: action.sidebarShadow,
      };
    case SET_SIDEBAR_FIXED:
      return {
        ...state,
        sidebarFixed: action.sidebarFixed,
      };
    case SET_SIDEBAR_STYLE:
      return {
        ...state,
        sidebarStyle: action.sidebarStyle,
      };
    case SET_SIDEBAR_FOOTER:
      return {
        ...state,
        sidebarFooter: action.sidebarFooter,
      };
    case SET_SIDEBAR_TOGGLE_MOBILE:
      return {
        ...state,
        sidebarToggleMobile: action.sidebarToggleMobile,
      };
    case SET_SIDEBAR_TOGGLE:
      return {
        ...state,
        sidebarToggle: action.sidebarToggle,
      };
    case SET_SIDEBAR_USERBOX:
      return {
        ...state,
        sidebarUserbox: action.sidebarUserbox,
      };

    // Header
    case SET_HEADER_FIXED:
      return {
        ...state,
        headerFixed: action.headerFixed,
      };
    case SET_HEADER_SHADOW:
      return {
        ...state,
        headerShadow: action.headerShadow,
      };
    case SET_HEADER_BG_TRANSPARENT:
      return {
        ...state,
        headerBgTransparent: action.headerBgTransparent,
      };
    case SET_HEADER_SEARCH_HOVER:
      return {
        ...state,
        headerSearchHover: action.headerSearchHover,
      };
    case SET_HEADER_DRAWER_TOGGLE:
      return {
        ...state,
        headerDrawerToggle: action.headerDrawerToggle,
      };

    // Main content
    case SET_CONTENT_BACKGROUND:
      return {
        ...state,
        contentBackground: action.contentBackground,
      };
    case SET_THEME_CONFIGURATOR_TOGGLE:
      return {
        ...state,
        themeConfiguratorToggle: action.themeConfiguratorToggle,
      };

    // Footer
    case SET_FOOTER_FIXED:
      return {
        ...state,
        footerFixed: action.footerFixed,
      };
    case SET_FOOTER_SHADOW:
      return {
        ...state,
        footerShadow: action.footerShadow,
      };
    case SET_FOOTER_BG_TRANSPARENT:
      return {
        ...state,
        footerBgTransparent: action.footerBgTransparent,
      };

    // Page title
    case SET_PAGE_TITLE_STYLE:
      return {
        ...state,
        pageTitleStyle: action.pageTitleStyle,
      };
    case SET_PAGE_TITLE_BACKGROUND:
      return {
        ...state,
        pageTitleBackground: action.pageTitleBackground,
      };
    case SET_PAGE_TITLE_SHADOW:
      return {
        ...state,
        pageTitleShadow: action.pageTitleShadow,
      };
    case SET_PAGE_TITLE_ICON_BOX:
      return {
        ...state,
        pageTitleIconBox: action.pageTitleIconBox,
      };
    case SET_PAGE_TITLE_DESCRIPTION:
      return {
        ...state,
        pageTitleDescription: action.pageTitleDescription,
      };
    default:
      break;
  }
  return state;
}

export default authReducer