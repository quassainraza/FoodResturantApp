import React from 'react';
import PK from '@assets/flagsSvgs/pk.svg'; // Import flag SVGs for your countries
import IK from '@assets/flagsSvgs/in.svg';
import IR from '@assets/flagsSvgs/ir.svg';
export type CountryData = {
  countryName: string;
  countryCode: string;
  flagComponent: React.FC<{}> | null;
};

export const countryList: CountryData[] = [
  {
    countryName: 'Please Select a Country',
    countryCode: ' ',
    flagComponent: null , // Replace with your actual flag SVG component
  },
  {
    countryName: 'India',
    countryCode: '+91',
    flagComponent: IK, // Replace with your actual flag SVG component
  },
  {
    countryName: 'Iran',
    countryCode: '+98',
    flagComponent: IR, // Replace with your actual flag SVG component
  },
  {
    countryName: 'Pakistan',
    countryCode: '+92',
    flagComponent: PK, // Replace with your actual flag SVG component
  },

  // Add more countries here
];
