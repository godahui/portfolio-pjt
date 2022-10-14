interface DotType {
  num?: number;
  scrollIndex: number;
}

const Dot = ({ num, scrollIndex }: DotType) => {
  return (
    <div
      style={{
        width: 8,
        height: 8,
        border: "1px solid #230653",
        borderRadius: 999,
        backgroundColor: scrollIndex === num ? "#230653" : "transparent",
        transitionDuration: "1000",
        transition: "background-color 0.5s",
      }}
    ></div>
  );
};

const Dots = ({ scrollIndex }: DotType) => {
  return (
    <div style={{ position: "fixed", top: "50%", right: 18 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 60,
        }}
      >
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
      </div>
    </div>
  );
};

export default Dots;
