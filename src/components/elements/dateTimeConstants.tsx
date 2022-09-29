const dateNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const styles = {
  dark: {
    wrapper:
      'w-full flex justify-center items-center h-28 shadow-lg border border-slate-500 bg-slate-600 shadow-gray-300',
    display:
      'flex flex-col border py-1 px-2 w-[260px] rounded bg-slate-800 text-white border-slate-500 shadow-xl shadow-inner',
  },
  light: {
    wrapper:
      'w-full  flex justify-center items-center h-28 shadow-lg border border-slate-300 bg-slate-100',
    display:
      'flex flex-col border py-1 px-2 w-[260px] rounded bg-slate-300 border-slate-500 shadow-md',
  },

  btn: 'w-full p-2 mb-3 rounded bg-green-700 text-white bg-gradient-to-r from-green-500 to-slate-800',
  container: 'w-[300px] mx-auto flex flex-col items-center rounded ',
  dateWrapper: 'flex justify-self-center items-baseline justify-center',
  date: 'text-[42px] time-display tracking-widest flex',
};

const { dark, light } = styles;

export { dateNames, light, dark, styles };
export default styles;
