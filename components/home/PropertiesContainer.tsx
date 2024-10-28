import { fetchProperties } from '@/utils/actions';
import PropertiesList from './PropertiesList';
import EmptyList from './EmptyList';
import type { PropertyCardProps } from '@/utils/types';

const PropertiesContainer = async ({ category, search }: { category?: string; search?: string }) => {
  const properties: PropertyCardProps[] = await fetchProperties({ search, category });

  if (properties.length === 0) {
    return <EmptyList heading='No properties found' message='Try adjusting your search.' btnText='clear filters' />;
  }

  return <PropertiesList properties={properties} />;
};
export default PropertiesContainer;
