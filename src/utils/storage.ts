export interface Lead {
    id: string;
    name: string;
    email: string;
    company: string;
    projectDetails: string;
    submittedAt: string;
    status: 'new' | 'contacted' | 'closed';
}

const STORAGE_KEY = 'speedship_leads';

export const getLeads = (): Lead[] => {
    try {
        const leads = localStorage.getItem(STORAGE_KEY);
        return leads ? JSON.parse(leads) : [];
    } catch (error) {
        console.error('Error fetching leads:', error);
        return [];
    }
};

export const saveLead = (lead: Omit<Lead, 'id' | 'submittedAt' | 'status'>): Lead => {
    const leads = getLeads();
    const newLead: Lead = {
        ...lead,
        id: crypto.randomUUID(),
        submittedAt: new Date().toISOString(),
        status: 'new',
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([newLead, ...leads]));
    return newLead;
};

export const updateLeadStatus = (id: string, status: Lead['status']) => {
    const leads = getLeads();
    const updatedLeads = leads.map(lead =>
        lead.id === id ? { ...lead, status } : lead
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLeads));
};

export const clearLeads = () => {
    localStorage.removeItem(STORAGE_KEY);
};
