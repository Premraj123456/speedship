
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, ArrowLeft, RefreshCw } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';

// Define Lead type based on Supabase schema
interface Lead {
    id: string;
    created_at: string;
    name: string;
    email: string;
    company: string;
    project_details: string;
    status: 'new' | 'contacted' | 'closed';
}

export const AdminPage: React.FC = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            navigate('/login');
        } else {
            fetchLeads();
        }
    };

    const fetchLeads = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('leads')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching leads:', error);
        } else {
            setLeads(data as Lead[]);
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    // Placeholder for update/delete functionality
    // const updateStatus = async (id: string, status: string) => { ... }

    return (
        <Section className="min-h-screen bg-slate-50">
            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <button onClick={() => navigate('/')} className="text-slate-500 hover:text-slate-900 transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <h1 className="text-3xl font-bold text-slate-900">Lead Management</h1>
                        </div>
                        <p className="text-slate-500">View and manage submitted contact requests.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" size="sm" onClick={fetchLeads} title="Refresh">
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                        </Button>
                        <Button variant="secondary" size="sm" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    {leads.length === 0 ? (
                        <div className="p-12 text-center text-slate-500">
                            {loading ? 'Loading leads...' : 'No leads found. Submitted forms will appear here.'}
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-semibold text-slate-700">Date</th>
                                        <th className="p-4 font-semibold text-slate-700">Name</th>
                                        <th className="p-4 font-semibold text-slate-700">Email</th>
                                        <th className="p-4 font-semibold text-slate-700">Company</th>
                                        <th className="p-4 font-semibold text-slate-700">Project Details</th>
                                        <th className="p-4 font-semibold text-slate-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {leads.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 text-sm text-slate-500 whitespace-nowrap">
                                                {new Date(lead.created_at).toLocaleDateString()} <br />
                                                <span className="text-xs">{new Date(lead.created_at).toLocaleTimeString()}</span>
                                            </td>
                                            <td className="p-4 font-medium text-slate-900">{lead.name}</td>
                                            <td className="p-4 text-slate-600">
                                                <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">{lead.email}</a>
                                            </td>
                                            <td className="p-4 text-slate-600">{lead.company || '-'}</td>
                                            <td className="p-4 text-slate-600 max-w-xs truncate" title={lead.project_details}>
                                                {lead.project_details}
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${lead.status === 'new' ? 'bg-green-100 text-green-700' :
                                                    lead.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-slate-100 text-slate-700'
                                                    }`}>
                                                    {lead.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    );
};
