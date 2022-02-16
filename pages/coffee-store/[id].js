import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      CoffeStore {router.query.id}
      <br />
      <Link href='/'>
        <a>Back to home</a>
      </Link>
      <br />
      <Link href='/coffee-store/dynamic'>
        <a>Go to page dynamic</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
