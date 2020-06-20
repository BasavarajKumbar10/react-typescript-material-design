import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import {colors} from './colors';

interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}

const primary: PaletteColor = {
    main: colors.primary,
}

const secondary: PaletteColor = {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
};

export default createMuiTheme({
    palette: {
        primary: primary,
        secondary: secondary,
        contrastThreshold: 3,
    },
});
