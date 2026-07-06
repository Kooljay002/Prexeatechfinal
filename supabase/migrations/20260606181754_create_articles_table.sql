/*
# Create Articles Table for Content Management

## Overview
Creates a fully-featured articles table to power the Insights blog section and admin content management dashboard.
Pre-populates the 5 existing articles from the Sentinel X pilot program.

## New Tables
### `articles`
- `id` (uuid, primary key) — unique identifier
- `slug` (text, unique) — URL slug used in /insights/[slug]
- `title` (text) — article headline
- `excerpt` (text) — short summary shown in article cards
- `content` (text) — full article body
- `category` (text) — article category tag
- `author` (text) — author name
- `cover_image` (text) — URL to cover image
- `read_time` (text) — estimated reading time
- `is_published` (boolean) — controls public visibility
- `published_at` (timestamptz) — publication date
- `created_at` / `updated_at` — timestamps

## Security (RLS)
- Anon users: SELECT only where is_published = true
- Authenticated admin: full SELECT/INSERT/UPDATE/DELETE
*/

CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT '',
  author text NOT NULL DEFAULT 'Prexea Team',
  cover_image text NOT NULL DEFAULT '',
  read_time text NOT NULL DEFAULT '5 min read',
  is_published boolean NOT NULL DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_published" ON articles;
CREATE POLICY "anon_read_published" ON articles FOR SELECT
TO anon USING (is_published = true);

DROP POLICY IF EXISTS "auth_read_all" ON articles;
CREATE POLICY "auth_read_all" ON articles FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_insert" ON articles;
CREATE POLICY "auth_insert" ON articles FOR INSERT
TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_update" ON articles;
CREATE POLICY "auth_update" ON articles FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete" ON articles;
CREATE POLICY "auth_delete" ON articles FOR DELETE
TO authenticated USING (true);

-- Seed existing articles
INSERT INTO articles (slug, title, excerpt, content, category, author, cover_image, read_time, is_published, published_at)
VALUES
(
  'how-sentinel-x-is-helping-nigerian-farmers-combat-fall-armyworm',
  'How Sentinel X Is Helping Nigerian Farmers Combat Fall Armyworm',
  'Following intervention and monitoring by field teams, farmers observed a significant reduction in pest activity within 10 to 14 days — including elimination of visible larvae and recovery of damaged maize leaves.',
  E'Fall Armyworm (FAW) remains one of the most destructive pests affecting maize production across Africa. In Nigeria, thousands of farmers experience significant crop losses annually due to FAW infestations, often resulting in reduced yields, increased production costs, and greater dependence on chemical pesticides.\n\nSentinel X is introducing a different approach.\n\nRather than reacting after extensive crop damage has occurred, Sentinel X supports early detection, rapid intervention, and continuous field monitoring to help farmers protect their crops before losses become severe.\n\nDuring the 2026 pilot deployment in Kaduna and Kano States, Sentinel X was introduced to maize farmers through field demonstrations, farmer sensitization programs, and extension support activities.\n\nOne of the most notable outcomes occurred in fields that were severely infested with Fall Armyworm. Following intervention and monitoring by field teams, farmers and extension agents observed a significant reduction in pest activity within 10 to 14 days.\n\nThe results included:\n\n• Elimination of visible larvae populations\n• Disappearance of egg masses previously identified in the field\n• Improved crop growth and vigor\n• Recovery of damaged maize leaves\n• Increased farmer confidence in the technology\n\nThese results were particularly impactful because farmers could directly compare treated fields with nearby untreated fields experiencing ongoing infestations.\n\nThe success of these demonstrations reinforced the value of practical, evidence-based agricultural innovation.\n\nAs Sentinel X expands across Nigeria, the goal is not only to reduce crop losses but also to strengthen food security, improve farmer profitability, and support more sustainable agricultural production systems.\n\nThe future of agriculture depends on technologies that are effective, scalable, and farmer-centered. Sentinel X is helping to make that future a reality.',
  'Sentinel-X',
  'Prexea Team',
  'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  '5 min read',
  true,
  '2026-06-02 00:00:00+00'
),
(
  'lessons-from-the-sentinel-x-pilot-in-kaduna-and-kano-states',
  'Lessons from the Sentinel X Pilot in Kaduna and Kano States',
  'The pilot revealed that farmers trust what they can see, extension agents are critical to adoption, and commercialization demands strong multi-stakeholder partnerships.',
  E'The Sentinel X pilot program in Kaduna and Kano States provided valuable insights into how innovative agricultural technologies can be successfully introduced and adopted within farming communities.\n\nThe pilot was designed to evaluate operational feasibility, farmer acceptance, stakeholder engagement, and field performance under real farming conditions.\n\nSeveral important lessons emerged from the deployment.\n\nFarmers Trust What They Can See\n\nOne of the strongest observations from the pilot was that farmers respond best to visible results.\n\nField demonstrations proved far more effective than theoretical explanations. Once farmers observed healthier crops and reduced Fall Armyworm activity, interest and acceptance increased significantly.\n\nExtension Agents Are Critical\n\nExtension agents served as the bridge between farmers and technology.\n\nTheir ability to provide guidance, monitor fields, and communicate results played a major role in building confidence and ensuring successful implementation.\n\nCommunity Entry Matters\n\nSuccessful adoption begins with community engagement.\n\nMeetings with farmer leaders, associations, and local stakeholders created trust and improved participation throughout the pilot.\n\nGovernment Participation Accelerates Adoption\n\nThe involvement of government agencies, agricultural departments, and research institutions added credibility to the project.\n\nStakeholders were able to witness field results firsthand, creating opportunities for future scale-up discussions.\n\nCommercialization Requires Strong Partnerships\n\nTechnology alone does not drive adoption.\n\nScaling Sentinel X will require collaboration among government agencies, agribusinesses, cooperatives, extension systems, financial institutions, and development organizations.\n\nThe pilot demonstrated that successful agricultural innovation is built on partnerships, evidence, and farmer trust.\n\nThese lessons are now shaping the next phase of Sentinel X commercialization in Nigeria.',
  'Field Insights',
  'Prexea Team',
  'https://images.pexels.com/photos/3626579/pexels-photo-3626579.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  '6 min read',
  true,
  '2026-05-28 00:00:00+00'
),
(
  'why-non-chemical-agricultural-solutions-matter-for-the-future-of-farming',
  'Why Non-Chemical Agricultural Solutions Matter for the Future of Farming',
  'Reduced production costs, improved environmental sustainability, and better food safety outcomes are driving interest in alternatives to conventional pesticide-based approaches.',
  E'Modern agriculture faces growing challenges.\n\nFarmers must produce more food while managing rising input costs, environmental concerns, climate-related risks, and increasing pressure to reduce chemical residues in food production.\n\nThese realities are driving interest in alternative agricultural solutions that support productivity while promoting sustainability.\n\nNon-chemical agricultural technologies are becoming increasingly important because they offer farmers additional tools to manage crop health and improve production outcomes without relying exclusively on conventional pesticide-based approaches.\n\nThe benefits are significant.\n\nReduced Production Costs\n\nMany farmers spend a substantial portion of their production budget on agrochemicals.\n\nReducing dependence on repeated chemical applications can help improve profitability.\n\nImproved Environmental Sustainability\n\nExcessive chemical use can impact soil health, water quality, and biodiversity.\n\nSustainable alternatives contribute to healthier agricultural ecosystems.\n\nBetter Food Safety Outcomes\n\nConsumers and regulators increasingly demand safer food systems with lower chemical residues.\n\nAgricultural technologies that support crop productivity while reducing chemical exposure align with these expectations.\n\nStronger Farmer Resilience\n\nClimate change and emerging pest pressures require innovative approaches that strengthen crop performance and reduce vulnerability.\n\nSentinel X represents one example of how innovation can support more resilient agricultural systems.\n\nThe future of farming will likely involve a combination of science, technology, sustainability, and practical field implementation.\n\nFarmers need solutions that work under real-world conditions. That is where innovation creates the greatest value.',
  'Agritech',
  'Prexea Team',
  'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  '6 min read',
  true,
  '2026-05-20 00:00:00+00'
),
(
  'from-pilot-to-commercialization-the-next-phase-of-sentinel-x-in-nigeria',
  'From Pilot to Commercialization: The Next Phase of Sentinel X in Nigeria',
  'The commercialization strategy is built around farmer access, strategic partnerships, extension support, and digital integration — targeting thousands of farmers across Nigeria.',
  E'The successful completion of the Sentinel X pilot program marks an important milestone in the journey toward large-scale agricultural transformation.\n\nThe pilot demonstrated that Sentinel X can be deployed effectively within Nigerian farming systems while generating positive responses from farmers, extension agents, researchers, and government stakeholders.\n\nThe next phase focuses on commercialization.\n\nCommercialization is not simply about expanding the number of users.\n\nIt involves building sustainable systems that support adoption, service delivery, monitoring, partnerships, and long-term impact.\n\nThe Sentinel X commercialization strategy is built around four key pillars.\n\nFarmer Access\n\nThe goal is to make Sentinel X available to farmers through cooperatives, farmer associations, outgrower schemes, commercial farms, and agricultural development programs.\n\nStrategic Partnerships\n\nPartnerships with government institutions, agribusiness companies, processors, development organizations, and financial service providers will be essential for scale.\n\nExtension Support\n\nA structured extension network will ensure farmers receive ongoing technical guidance and support.\n\nDigital Integration\n\nTechnology-enabled onboarding, payment systems, reporting platforms, and monitoring tools will improve transparency and operational efficiency.\n\nThe commercialization phase aims to reach thousands of farmers while creating measurable improvements in crop productivity, resilience, and food security.\n\nThe transition from pilot to scale represents the beginning of a new chapter for Sentinel X in Nigeria.',
  'Commercialization',
  'Prexea Team',
  'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  '7 min read',
  true,
  '2026-05-12 00:00:00+00'
),
(
  'building-farmer-trust-through-demonstration-and-evidence-based-agriculture',
  'Building Farmer Trust Through Demonstration and Evidence-Based Agriculture',
  'Agricultural innovation succeeds when farmers can verify results themselves. The Sentinel X Green Field Day in Kaduna State demonstrated how evidence-based deployment transforms adoption conversations from possibilities to observable outcomes.',
  E'Agricultural innovation succeeds when farmers trust the results.\n\nFor many farming communities, trust is not built through presentations or brochures. It is built through evidence.\n\nFarmers want to see how a technology performs under real field conditions before deciding whether to adopt it.\n\nThis principle guided the implementation of the Sentinel X pilot program.\n\nDemonstration plots were established to allow farmers, extension agents, researchers, and government representatives to observe results firsthand.\n\nThe impact was immediate.\n\nFarmers could compare treated and untreated fields.\n\nThey could observe crop recovery, plant health improvements, and changes in pest activity.\n\nThis approach transformed conversations about technology adoption.\n\nInstead of discussing possibilities, stakeholders were discussing observable outcomes.\n\nThe Green Field Day held in Kaduna State provided a powerful example of evidence-based agriculture in action.\n\nParticipants from government ministries, agricultural agencies, farmer organizations, and research institutions witnessed the performance of Sentinel X directly in the field.\n\nThe experience reinforced an important lesson.\n\nFarmers are more likely to adopt technologies when they can verify results themselves.\n\nAs Sentinel X expands, demonstration-based learning will remain a central component of its deployment strategy.\n\nThe most effective way to promote innovation is to allow farmers to see, evaluate, and experience the results firsthand.\n\nThat is how trust is built.\n\nAnd trust is the foundation of sustainable adoption.',
  'Field Insights',
  'Prexea Team',
  'https://images.pexels.com/photos/7728086/pexels-photo-7728086.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  '5 min read',
  true,
  '2026-05-05 00:00:00+00'
)
ON CONFLICT (slug) DO NOTHING;
