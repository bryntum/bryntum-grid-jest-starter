import React from 'react';
import {BryntumGrid} from "@bryntum/grid-react";
import { gridConfig } from "./GridConfig";

const SimpleGrid = () => {

    return (
        <BryntumGrid
            title='Grid Title'
            {...gridConfig}
        />
    );
}
export default SimpleGrid;

