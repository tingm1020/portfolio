// pages/project/[slug].js

const ProjectDetail = () => {
  return <div>這是專案列表</div>;
};

export default ProjectDetail;

// 臨時 stub：避免部署錯誤，可之後再實作資料讀取
export async function getStaticPaths() {
  return {
    paths: [], // 沒有可預渲染的頁面
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {}, // 暫時不傳資料
  };
}
