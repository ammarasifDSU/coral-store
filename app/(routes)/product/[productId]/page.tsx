import getSingleProduct from "@/actions/get-singleproduct";
import Breadcrumbs, { BreadcrumbItem } from "@/components/breadcrumbs";
import { Gallery } from "@/components/product/gallery";
import { ProductDetail } from "@/components/product/product-detail";
import Container from "@/components/ui/container";
import TabSet from "@/components/ui/tab";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductDescription: React.FC<ProductPageProps> = async ({ params }) => {
  const crumbs: BreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: "Handbag", link: "#" },
    { label: `Label`, link: `/product/${params.productId}` },
  ];

  const product = await getSingleProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-screen-2xl px-4">
          <div className="flex flex-col bg-white p-6 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
            <div className="h-full w-full basis-full lg:basis-2/4">
              <Breadcrumbs crumbs={crumbs} />
              <Gallery
                images={product?.images.map((image: string) => ({
                  src: image,
                  altText: product?.title,
                }))}
              />
            </div>

            <div className="basis-full lg:basis-2/4">
              <ProductDetail product={product} />
            </div>
          </div>
          <div>
            <div className="container mx-auto mt-8 text-xs md:text-base p-1 md:p-4">
              <TabSet product={product} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDescription;
