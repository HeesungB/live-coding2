export const Question2 = () => {
  function count() {
    let i: number;

    for (i = 0; i < 10; i += 1) {
      setTimeout(() => {
        console.log(i);
      }, i * 100);
    }
  }

  count();

  return <></>;
};
