function fe(e){var r,f,o="";if(e)if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(f=fe(e[r]))&&(o&&(o+=" "),o+=f);else for(r in e)e[r]&&(f=fe(r))&&(o&&(o+=" "),o+=f);else"boolean"==typeof e||e.call||(o&&(o+=" "),o+=e);return o}export default function(){for(var e,r=0,f="";r<arguments.length;)(e=fe(arguments[r++]))&&(f&&(f+=" "),f+=e);return f}