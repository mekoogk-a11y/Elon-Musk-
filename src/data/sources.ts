/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SourceCitation } from '../types';

export const MASTER_SOURCES: Record<string, SourceCitation> = {
  secTesla10K2025: {
    id: 'sec-tesla-10k-2025',
    title: 'Tesla Inc. Form 10-K Annual Report (Fiscal Year Ended Dec 31, 2025)',
    type: 'SEC',
    publisher: 'U.S. Securities and Exchange Commission',
    year: 2026,
    url: 'https://www.sec.gov/edgar/browse/?CIK=0001318605',
    note: 'Official regulatory filing regarding vehicle deliveries, energy storage deployments, and FSD disclosures.'
  },
  nasaCommercialCrew: {
    id: 'nasa-commercial-crew',
    title: 'NASA Commercial Crew Transportation Capability Contract (CCtCap) Final Evaluation',
    type: 'NASA',
    publisher: 'National Aeronautics and Space Administration',
    year: 2020,
    url: 'https://www.nasa.gov/commercial-crew-program/',
    note: 'Documented SpaceX Crew Dragon certification for human spaceflight to the ISS.'
  },
  nasaArtemisHLS: {
    id: 'nasa-artemis-hls',
    title: 'Human Landing System Option A Source Selection Statement',
    type: 'NASA',
    publisher: 'National Aeronautics and Space Administration',
    year: 2021,
    url: 'https://www.nasa.gov/humans-in-space/artemis/',
    note: 'Selection of SpaceX Starship Human Landing System (HLS) for lunar surface missions.'
  },
  spacexFalconGuide: {
    id: 'spacex-falcon-guide',
    title: 'Falcon 9 & Falcon Heavy Launch Vehicle Payload User’s Guide Rev 3.0',
    type: 'Company',
    publisher: 'Space Exploration Technologies Corp.',
    year: 2023,
    url: 'https://www.spacex.com',
    note: 'Technical specifications on payload mass to LEO, GTO, and fairing acoustic parameters.'
  },
  neuralinkN1Prime: {
    id: 'neuralink-n1-prime',
    title: 'PRIME Study: Clinical Feasibility of a Fully Implanted Wireless Brain-Computer Interface',
    type: 'Academic',
    publisher: 'ClinicalTrials.gov / Clinical Investigation Protocol',
    year: 2024,
    url: 'https://clinicaltrials.gov/study/NCT06429735',
    note: 'Documented feasibility trial for computer cursor control in quadraparetic patients.'
  },
  reutersTeslaAutonomy: {
    id: 'reuters-tesla-autonomy',
    title: 'Tesla Unveils Cybercab and Autonomous Network Architecture at Burbank Showcase',
    type: 'Journalism',
    publisher: 'Reuters Aerospace & Tech Desk',
    year: 2024,
    url: 'https://www.reuters.com/technology/',
    note: 'Coverage of inductive charging and vision-only architecture.'
  },
  fccStarlinkAuthorization: {
    id: 'fcc-starlink-auth',
    title: 'FCC Order and Authorization for SpaceX Gen2 Non-Geostationary Satellite Constellation',
    type: 'SEC',
    publisher: 'Federal Communications Commission',
    year: 2022,
    url: 'https://www.fcc.gov',
    note: 'Regulatory authorization for Ku/Ka-band direct-to-cell and LEO inter-satellite laser links.'
  },
  isaacsonBiography: {
    id: 'isaacson-biography',
    title: 'Elon Musk: The Authorized Biography',
    type: 'Academic',
    publisher: 'Simon & Schuster (Walter Isaacson)',
    year: 2023,
    note: 'In-depth historical documentation of Zip2, PayPal merger, early Falcon 1 launches, and factory operations.'
  },
  xaiColossusReport: {
    id: 'xai-colossus-2025',
    title: 'xAI Memphis Colossus 100,000 H100 Supercluster Architecture & Power Infrastructure',
    type: 'Company',
    publisher: 'xAI Technical Engineering Communications',
    year: 2025,
    note: 'Cluster interconnect, liquid cooling, and Grok 3 foundational model pre-training specs.'
  }
};
