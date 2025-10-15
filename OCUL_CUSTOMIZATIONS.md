# OCUL Customizations

This file outlines the customizations that are included in this code base.

### OCUL Location Items Filter
This component simply expands the location item filters by default when viewing the full display of a record that contains multiple items (Under the Locations heading).

This component binds to the `nde-location-items-filter-before` componment and simply toggles the inner `filtersVisible` state of the host component to expand it by default.

Find the code for this customization in `src/app/ocul-location-items-filter`. 

To turn this on, register this component in the the selectorComponentMap in `src/app/custom1-module/customComponentMappings.ts`: 

```javascript
import { OculLocationItemsFilterComponent } from "../ocul-location-items-filter/ocul-location-items-filter.component";

// Define the map
export const selectorComponentMap = new Map<string, any>([
    ['nde-location-items-filter-before', oculLocationItemsFilterComponent],
]);
```

[Learn more about this customization in the CFDUX spotdocs](https://docs.scholarsportal.info/view/Main/OCUL/CF/Committees/CFDUX/CFDUX_Configuration_Documentation/12_-_JS_changes/). 