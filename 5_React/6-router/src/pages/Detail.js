import { useParams, useSearchParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [search, setSearch] = useSearchParams();
  // useSearchParams() = URL에서 필요한 정보 가지고오는 훅
  const page = search.get("page");
  const keyword = search.get("keyword");
  console.log(page, keyword);
  return (
    <h1>
      Detail {id} 페이지 : {page} , {keyword}
    </h1>
  );
};
export default Detail;
