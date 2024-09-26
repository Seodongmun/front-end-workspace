const today = new Date();

const CustomDate = () => {
  return (
    <>
      <div>
        {today.getMonth() + 1}월 {today.getDate()}일
      </div>
    </>
  );
};

export default CustomDate;
