import { newSpecPage } from '@stencil/core/testing';
import { ArcGISBasemapGallery } from './arcgis-basemap-gallery';

it('should render my component', async () => {
  const page = await newSpecPage({
    components: [ArcGISBasemapGallery],
    html: `<arcgis-basemap-gallery></arcgis-basemap-gallery>`,
  });
  expect(page.root).toEqualHtml(`
    <arcgis-basemap-gallery></arcgis-basemap-gallery>
  `);
});