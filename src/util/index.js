export default {
  setPLC(s) {
    return `${s}`;
  },
  getPLC(plcString) {
    if (!plcString || !plcString.length) {
      return {
        plcname: '',
        plcvalue: '',
      };
    }
    return {
      plcname: Number.isNaN(parseInt(plcString.charAt(0), 10)) ? plcString.charAt(0) : '',
      plcvalue: plcString.replace(/[^0-9]/ig, ''),
    };
  },
};