import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { sno } = router.query;
  return (
    <div>
      <h2>post: {sno}</h2>
    </div>
  );
};
export default Post;
