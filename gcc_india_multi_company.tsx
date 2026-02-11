import React, { useState } from 'react';
import { Download, Search, Building2, AlertCircle, CheckCircle, XCircle, TrendingUp, MapPin } from 'lucide-react';

const IndiaGCCDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const companiesData = [
    {
      company: "Amdocs",
      sector: "Telecom Software & Services",
      hasGCC: true,
      locations: "Pune (Primary), Gurgaon",
      natureOfWork: "Software engineering, OSS/BSS solutions, cloud migration, DevOps, CI/CD, telecom platform development, digital transformation, customer experience solutions, 5G technology, network automation",
      indiaLeaders: "Rajat Raheja (Division President, Amdocs Development Centre India LLP)",
      globalSponsors: "Shuky Sheffer (President & CEO); Tamar Rapaport-Dagim (CFO & COO)",
      scale: "Significant presence with 1,000+ employees across India; Pune is primary development center",
      deliveryModel: "Development center & GCC; Product engineering and R&D hub for global telecom solutions",
      focusThemes: "Cloud (GCP, AWS, Azure), Terraform & DevOps, AI/ML for telecom, 5G network solutions, Digital BSS/OSS transformation, Customer experience platforms, Network automation, Microservices architecture",
      status: "Operational"
    },
    {
      company: "Spotify",
      sector: "Music Streaming / Media",
      hasGCC: true,
      locations: "Mumbai (Bandra Kurla Complex)",
      natureOfWork: "Market operations, business development, content partnerships, licensing, regional music curation, artist relations, India market strategy (Note: Tech/Engineering GCC not confirmed)",
      indiaLeaders: "Amarjit Singh Batra (Designated Partner); India Operations Team",
      globalSponsors: "Spotify Global Operations & Content Leadership",
      scale: "Mumbai office operational; Converted from Pvt Ltd to LLP structure (2019); Focus on commercial operations",
      deliveryModel: "Commercial office & market operations center (Not a technology GCC)",
      focusThemes: "Content partnerships & licensing, Regional music strategy, Artist development, Market expansion, User growth initiatives, Local content curation",
      status: "Operational - Commercial Focus"
    },
    {
      company: "Compare the Market (CtM)",
      sector: "Insurance Comparison / FinTech",
      hasGCC: false,
      locations: "No GCC operations identified in India",
      natureOfWork: "N/A - No confirmed Indian operations or GCC",
      indiaLeaders: "N/A",
      globalSponsors: "N/A",
      scale: "No India presence confirmed",
      deliveryModel: "No GCC in India",
      focusThemes: "N/A - Company operates primarily in UK/Australia markets",
      status: "No India GCC"
    },
    {
      company: "Uber",
      sector: "Ride-Hailing / Mobility Tech",
      hasGCC: true,
      locations: "Bengaluru (Primary Engineering Center), Hyderabad (R&D Center & COE), Gurgaon",
      natureOfWork: "Product engineering, mobility solutions, mapping technology, payment systems, Uber Lite development, multimodal transport, Uber Bus, micromobility, machine learning, AI, data science, rider/driver platforms",
      indiaLeaders: "Manikandan Thangarathnam (Senior Director - Mobility & Platforms, Bengaluru); Hyderabad COE Leadership",
      globalSponsors: "Dara Khosrowshahi (CEO, Uber); Sundeep Jain (CPO - former CTO)",
      scale: "750+ engineers across Bengaluru & Hyderabad (as of 2021); Plans to double headcount; Asia's first engineering center",
      deliveryModel: "Engineering centers & R&D hubs; Center of Excellence (COE) in Hyderabad; Full-stack product development",
      focusThemes: "AI & machine learning, Urban mobility innovation, Multimodal transport (Bus, micromobility), Maps & routing technology, Payment systems optimization, Data science & analytics, Mobile engineering (Uber Lite), Vehicle platform technology, Safety & fraud detection",
      status: "Operational & Expanding"
    },

    {
      company: "Marsh Insurance (MMC)",
      sector: "Insurance Broking / Risk Advisory",
      hasGCC: true,
      locations: "Gurugram, Mumbai, Pune, Bengaluru",
      natureOfWork: "Risk advisory, insurance broking operations, data analytics, underwriting support, claims processing, technology services, actuarial services, client servicing",
      indiaLeaders: "Marsh McLennan India Leadership",
      globalSponsors: "Marsh McLennan Global Services Leadership",
      scale: "Significant India presence as part of Marsh McLennan Services; Multi-city operations",
      deliveryModel: "Shared services center & GCC; Insurance and risk management operations hub",
      focusThemes: "InsurTech solutions, Risk analytics & modeling, Data science for underwriting, Digital transformation, Claims automation, Client portal development, Regulatory compliance technology",
      status: "Operational"
    },
    {
      company: "Computacenter",
      sector: "IT Services / Managed Services",
      hasGCC: false,
      locations: "No dedicated GCC identified in India",
      natureOfWork: "N/A - Limited/no confirmed Indian GCC operations",
      indiaLeaders: "N/A",
      globalSponsors: "N/A",
      scale: "Primarily operates in UK, Germany, France; No significant India GCC presence confirmed",
      deliveryModel: "No India GCC",
      focusThemes: "N/A - Focus on European markets",
      status: "No India GCC"
    },
    {
      company: "Moody's",
      sector: "Credit Rating / Financial Analytics",
      hasGCC: true,
      locations: "Gurgaon (Primary), other India locations possible",
      natureOfWork: "Credit research & analysis, ratings analytics, financial data processing, technology development, risk assessment, ESG analytics, regulatory reporting, data engineering",
      indiaLeaders: "Moody's India Leadership Team",
      globalSponsors: "Moody's Global Technology & Analytics Leadership",
      scale: "Established India presence supporting global ratings and analytics operations",
      deliveryModel: "Analytics & technology center; Supporting global credit ratings and research",
      focusThemes: "AI/ML for credit analytics, ESG data & analytics, Risk modeling & assessment, Financial data engineering, Regulatory technology, Cloud infrastructure, Credit research automation",
      status: "Operational"
    },
    {
      company: "Sky/Comcast",
      sector: "Media & Entertainment / Telecom",
      hasGCC: true,
      locations: "Hyderabad (likely), Bengaluru (possible - part of Comcast footprint)",
      natureOfWork: "Software engineering, content technology, streaming platforms, media technology, customer experience systems, broadcast technology, digital entertainment solutions",
      indiaLeaders: "Comcast India Technology Leadership",
      globalSponsors: "Comcast/Sky Global Technology Leadership",
      scale: "Part of Comcast's global technology operations with India presence",
      deliveryModel: "Technology center supporting Sky & Comcast media/entertainment platforms",
      focusThemes: "Streaming technology & OTT platforms, Content delivery networks, AI for content recommendations, Customer experience platforms, Media asset management, Broadcast technology innovation, Cloud-based media services",
      status: "Operational"
    },
    {
      company: "Equinix",
      sector: "Data Centers / Digital Infrastructure",
      hasGCC: true,
      locations: "Mumbai, Bengaluru, Chennai, Delhi NCR (Data center operations)",
      natureOfWork: "Data center operations, network engineering, cloud connectivity, digital infrastructure, interconnection services, platform engineering, customer portal development",
      indiaLeaders: "Equinix India Operations Leadership",
      globalSponsors: "Equinix Global Operations & Engineering",
      scale: "Multiple data center facilities across India; IBX data centers operational",
      deliveryModel: "Operational hub & technology center for digital infrastructure",
      focusThemes: "Digital infrastructure automation, Network interconnection technology, Cloud on-ramp solutions, Edge computing platforms, Data center optimization, Customer experience portals, Sustainability & green data centers",
      status: "Operational"
    },
    {
      company: "Haleon",
      sector: "Consumer Healthcare",
      hasGCC: true,
      locations: "Gurgaon, Mumbai (likely - spun off from GSK)",
      natureOfWork: "Consumer healthcare operations, R&D support, supply chain, technology services, commercial operations, digital health solutions, data analytics",
      indiaLeaders: "Haleon India Leadership (post-GSK spin-off)",
      globalSponsors: "Haleon Global Operations Leadership",
      scale: "Inherited GSK infrastructure; Establishing independent operations post-spinoff (2022)",
      deliveryModel: "GCC supporting global consumer healthcare operations",
      focusThemes: "Digital health innovation, Consumer insights & analytics, Supply chain optimization, E-commerce & digital marketing, R&D technology platforms, Data science for consumer products",
      status: "Operational (Post-GSK Spinoff)"
    },
    {
      company: "Elastic",
      sector: "Search & Analytics / Enterprise Software",
      hasGCC: true,
      locations: "Bengaluru, Hyderabad (possible)",
      natureOfWork: "Elasticsearch development, Kibana engineering, search technology, observability platforms, security analytics, cloud SaaS development, distributed systems engineering",
      indiaLeaders: "Elastic India Engineering Leadership",
      globalSponsors: "Elastic Global Engineering Leadership",
      scale: "Significant engineering presence in India; Key contributor to Elastic Stack development",
      deliveryModel: "Engineering center & product development hub; Contributing to core Elastic products",
      focusThemes: "Search technology & Elasticsearch, Observability & monitoring (APM), Security analytics (SIEM), Cloud SaaS platform development, Machine learning for search, Distributed systems engineering, Log analytics & visualization",
      status: "Operational"
    },
    {
      company: "Tessenderlo",
      sector: "Chemicals / Industrial",
      hasGCC: false,
      locations: "No GCC operations identified in India",
      natureOfWork: "N/A - No confirmed Indian GCC operations",
      indiaLeaders: "N/A",
      globalSponsors: "N/A",
      scale: "Belgian industrial company; No India GCC presence confirmed",
      deliveryModel: "No India GCC",
      focusThemes: "N/A - Primarily European operations",
      status: "No India GCC"
    },
    {
      company: "Johnson Controls (JCI)",
      sector: "Building Technology / Industrial IoT",
      hasGCC: true,
      locations: "Pune (Primary - R&D Center), Hyderabad, Bengaluru",
      natureOfWork: "Building automation systems, HVAC controls, fire & security systems, smart building technology, IoT platforms, energy management, sustainability solutions, AI for buildings",
      indiaLeaders: "Arun Awasthy (President & Managing Director, India); Sivakumar Selva Ganapathy (Director)",
      globalSponsors: "George Oliver (Chairman & CEO); Vijay Sankaran (VP & Global CTO - Indian Origin)",
      scale: "Major R&D center in Pune; 1,000+ employees in technology & engineering; Significant manufacturing presence",
      deliveryModel: "R&D center & engineering hub; Product development for global building technology solutions",
      focusThemes: "Smart building technology & IoT, AI & machine learning for building optimization, Energy management & sustainability, Cloud-based building platforms, Fire & security systems innovation, HVAC controls & automation, Digital twin technology, Predictive maintenance",
      status: "Operational & Expanding"
    }
  ];

  const statusOptions = ['all', 'Operational', 'No India GCC'];

  const filteredData = companiesData.filter(company => {
    const matchesSearch = 
      company.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.focusThemes.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'Operational' && company.hasGCC) ||
      (statusFilter === 'No India GCC' && !company.hasGCC);
    
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: companiesData.length,
    withGCC: companiesData.filter(c => c.hasGCC).length,
    withoutGCC: companiesData.filter(c => !c.hasGCC).length,
  };

  const exportToCSV = () => {
    const headers = [
      'Company',
      'Sector',
      'Has India GCC',
      'India Locations',
      'Nature of Work',
      'India Leaders',
      'Global Sponsors',
      'Scale / Headcount',
      'Delivery Model',
      'Focus Themes',
      'Status'
    ];

    const csvData = filteredData.map(c => [
      c.company,
      c.sector,
      c.hasGCC ? 'Yes' : 'No',
      c.locations,
      c.natureOfWork,
      c.indiaLeaders,
      c.globalSponsors,
      c.scale,
      c.deliveryModel,
      c.focusThemes,
      c.status
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => 
        row.map(cell => {
          const cellStr = String(cell || '');
          if (cellStr.includes(',') || cellStr.includes('\n') || cellStr.includes('"')) {
            return `"${cellStr.replace(/"/g, '""')}"`;
          }
          return cellStr;
        }).join(',')
      )
    ].join('\n');

    const BOM = '\ufeff';
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'India_GCC_Multi_Company_Analysis.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                India GCC Ecosystem Analysis
              </h1>
              <p className="text-gray-600">Multi-company analysis across 14 global organizations</p>
            </div>
            <Building2 className="w-16 h-16 text-blue-600" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-blue-700">{stats.total}</div>
                  <div className="text-xs text-gray-600">Companies Analyzed</div>
                </div>
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-700">{stats.withGCC}</div>
                  <div className="text-xs text-gray-600">With India GCC</div>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-rose-700">{stats.withoutGCC}</div>
                  <div className="text-xs text-gray-600">No India GCC</div>
                </div>
                <XCircle className="w-8 h-8 text-rose-600" />
              </div>
            </div>
          </div>

          {/* Coverage Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg p-4 text-white">
              <div className="text-sm font-medium mb-1">🌏 Geographic Spread</div>
              <div className="text-base font-bold">Bengaluru, Hyderabad, Pune, Gurgaon, Mumbai</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
              <div className="text-sm font-medium mb-1">🎯 Coverage Rate</div>
              <div className="text-base font-bold">{Math.round((stats.withGCC/stats.total)*100)}% Have India Operations</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex gap-3 items-center flex-wrap">
            <div className="flex-1 min-w-[300px] relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search companies, sectors, or technologies..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Companies</option>
              <option value="Operational">With India GCC</option>
              <option value="No India GCC">No India GCC</option>
            </select>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              <Download className="w-5 h-5" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Company Cards */}
        <div className="space-y-5">
          {filteredData.map((company, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${!company.hasGCC ? 'border-2 border-rose-200' : ''}`}>
              <div className={`p-4 ${company.hasGCC ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-rose-500 to-rose-600'}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-white">{company.company}</h2>
                      {company.hasGCC ? (
                        <CheckCircle className="w-6 h-6 text-green-300" />
                      ) : (
                        <XCircle className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <p className="text-white/90 text-sm mt-1">{company.sector}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    company.hasGCC ? 'bg-green-400 text-green-900' : 'bg-rose-200 text-rose-900'
                  }`}>
                    {company.status}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {company.hasGCC ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-blue-600" />
                            <h3 className="text-xs font-semibold text-gray-500 uppercase">India Locations</h3>
                          </div>
                          <p className="text-sm text-gray-800 font-medium">{company.locations}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-1">Scale / Headcount</h3>
                          <p className="text-sm text-gray-800">{company.scale}</p>
                        </div>

                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-1">Delivery Model</h3>
                          <p className="text-sm text-gray-800">{company.deliveryModel}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-1">India Leaders</h3>
                          <p className="text-sm text-gray-800">{company.indiaLeaders}</p>
                        </div>

                        <div>
                          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-1">Global Sponsors</h3>
                          <p className="text-sm text-gray-800">{company.globalSponsors}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Nature of Work</h3>
                        <p className="text-sm text-gray-800 leading-relaxed">{company.natureOfWork}</p>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <h3 className="text-xs font-semibold text-blue-900 uppercase mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Key Focus Themes
                        </h3>
                        <p className="text-sm text-blue-900 leading-relaxed">{company.focusThemes}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="py-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <AlertCircle className="w-12 h-12 text-rose-500" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">No India GCC Identified</h3>
                        <p className="text-sm text-gray-600">This company does not appear to have GCC operations in India</p>
                      </div>
                    </div>
                    <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> {company.focusThemes || 'Company primarily operates in other geographic markets. No confirmed technology center, R&D facility, or shared services operations in India based on available public information.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Insights */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">📊 Ecosystem Insights:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">✅ Companies WITH India GCC ({stats.withGCC}):</h4>
              <ul className="space-y-1 ml-4 text-gray-700">
                {companiesData.filter(c => c.hasGCC).map((c, i) => (
                  <li key={i}>• <strong>{c.company}</strong> - {c.locations.split(',')[0]}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">❌ Companies WITHOUT India GCC ({stats.withoutGCC}):</h4>
              <ul className="space-y-1 ml-4 text-gray-700">
                {companiesData.filter(c => !c.hasGCC).map((c, i) => (
                  <li key={i}>• <strong>{c.company}</strong> - {c.sector}</li>
                ))}
              </ul>
              <div className="mt-3 p-3 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-xs text-gray-700">
                  <strong>Why no GCC?</strong> These companies either focus on specific geographic markets (UK/Europe), 
                  have limited technology operations, or leverage third-party services rather than captive centers.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-2">🎯 Key Observations:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Top Cities:</strong> Bengaluru and Pune lead with maximum GCC presence</li>
              <li>• <strong>Dominant Sectors:</strong> Technology, Telecom, FinTech have strongest India GCC footprint</li>
              <li>• <strong>Focus Areas:</strong> AI/ML, Cloud, DevOps, Analytics dominate across all operational GCCs</li>
              <li>• <strong>Missing Sectors:</strong> European-focused companies (Compare the Market, Tessenderlo, Computacenter) lack India presence</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Comprehensive multi-company GCC analysis | Based on public information and corporate disclosures</p>
          <p className="mt-1">Data compiled: February 2026 | Research covers operational GCCs and confirmed India operations</p>
        </div>
      </div>
    </div>
  );
};

export default IndiaGCCDashboard;