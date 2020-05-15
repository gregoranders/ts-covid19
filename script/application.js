import React,{useState}from"react";import PropTypes from"prop-types";import{CssBaseline,ThemeProvider,createMuiTheme}from"@material-ui/core";import{colors}from"@material-ui/core";import{Context,Theme,webWorker}from"context";import{Routes}from"routes";import{ModelProcessor}from"model";const themeLight=createMuiTheme({palette:{primary:colors.blue}}),themeDark=createMuiTheme({palette:{type:"dark"}}),modelCachedValue=localStorage.getItem("jhu-csse-covid19"),initialModel=modelCachedValue&&modelCachedValue.length?JSON.parse(modelCachedValue):[],settingsCachedValue=localStorage.getItem("settings"),settings=settingsCachedValue?JSON.parse(settingsCachedValue):{theme:Theme.LIGHT,densePadding:!0};export const Application=({basename})=>{const[state,setState]=useState({theme:settings.theme,densePadding:settings.densePadding,toggleTheme:()=>{switch(state.theme){case Theme.DARK:state.theme=Theme.LIGHT;break;default:case Theme.LIGHT:state.theme=Theme.DARK}setState({...state}),localStorage.setItem("settings",JSON.stringify({theme:state.theme,densePadding:state.densePadding}))},toggleDensePadding:()=>{setState({...state,densePadding:!state.densePadding}),localStorage.setItem("settings",JSON.stringify({theme:state.theme,densePadding:state.densePadding}))},processor:new ModelProcessor(initialModel),updating:!1,updateModel:()=>{const worker=webWorker();state.updating||(worker.onmessage=e=>{state.processor=new ModelProcessor(e.data),state.updating=!1,localStorage.setItem("jhu-csse-covid19",JSON.stringify(e.data)),setState({...state})},worker.postMessage(state.updating),state.processor=new ModelProcessor([]),state.updating=!0,setState({...state}))}});return React.createElement(Context.Provider,{value:state},React.createElement(ThemeProvider,{theme:"light"===state.theme?themeLight:themeDark},React.createElement(CssBaseline,null),React.createElement(Routes,{basename})))};Application.displayName="Application",Application.propTypes={basename:PropTypes.string.isRequired},Application.defaultProps={basename:"/"};export default Application;