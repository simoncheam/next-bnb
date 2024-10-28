import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import { Button } from '@/components/ui/button';

const HomePage = ({ searchParams }: { searchParams: { category?: string; search?: string } }) => {
  console.log(searchParams);
  return (
    <section>
      <CategoriesList category={searchParams.category} search={searchParams.search} />
      <PropertiesContainer category={searchParams.category} search={searchParams.search} />
      {/* <h1 className='text-3xl'>HomePage</h1> */}
      {/* <Button variant='outline' size='lg' className='capitalize m-8'>
        Click me
      </Button> */}
    </section>
  );
};
export default HomePage;
