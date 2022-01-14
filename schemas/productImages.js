export default {
  name: "productImages",
  title: "Product Images",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Image Name",
      type: "string",
      description: "Name of the image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of the image",
    },
    {
      name: "date",
      title: "Added Date",
      type: "date",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
