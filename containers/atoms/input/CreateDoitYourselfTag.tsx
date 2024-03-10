import { useState } from "react";
import ChipTag from "../chipTag/ChipTag";
import CreateDoItYourselfInput from "./CreateDoItYourselfInput";
import styles from "./createDoItYourselfTag.module.scss";

const colors = ["orange", "green", "pink", "blue"];

export default function CreateDoitYourselfTag() {
  const [tags, setTags] = useState<string[]>([]); // 입력된 태그들을 저장하는 상태

  // 엔터를 누르면 태그를 추가하는 함수
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value.trim() !== "") {
      const newTag = event.currentTarget.value.trim(); // 입력된 값을 가져옴
      setTags((prevTags) => [...prevTags, newTag]); // 새로운 태그를 추가함
      event.currentTarget.value = ""; // 입력 필드를 비움
    }
  };

  // 태그를 클릭하여 해당 태그를 제거하는 함수
  const handleTagClick = (index: number) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  return (
    <CreateDoItYourselfInput
      title="태그"
      content="입력 후 Enter를 누르세요"
      type="text"
      onKeyDown={handleKeyDown}
    >
      <div className={styles.tagContainer}>
        <div className={styles.tag}>
          {tags.map((tag, index) => (
            <ChipTag
              key={index}
              tag={tag}
              color={colors[index % 4]}
              onClick={() => handleTagClick(index)} // 태그 클릭 시 삭제되는 핸들러 추가
            />
          ))}
        </div>
      </div>
    </CreateDoItYourselfInput>
  );
}
