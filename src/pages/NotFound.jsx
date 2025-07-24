const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-4">
        404 - 페이지를 찾을 수 없습니다
      </h1>
      <a href="/" className="text-blue-500 underline">
        홈으로 돌아가기
      </a>
    </div>
  );
};

export default NotFound;
