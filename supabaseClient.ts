import { createClient } from '@supabase/supabase-js';

// In a real production setup, these would be in import.meta.env
// For this demo, we use the provided keys directly.
const SUPABASE_URL = 'https://zgkovghzfzrgpxjobq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ICFao23PmLonXjt4MzDtxQ_GLgBc2Y1';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helper to check building codes against a mock database list
// In a real app, this would query a 'buildings' table
export const validateBuildingId = async (buildingId: string): Promise<boolean> => {
  // Simulating an API call latency
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const validCodes = ['RES-101', 'TOWER-A', 'BLDG-55', 'LOFT-9'];
  return validCodes.includes(buildingId.toUpperCase());
};