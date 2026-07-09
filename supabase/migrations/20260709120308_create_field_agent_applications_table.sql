CREATE TABLE IF NOT EXISTS field_agent_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  state_of_residence text,
  application_data jsonb NOT NULL DEFAULT '{}',
  document_urls jsonb DEFAULT '{}',
  status text NOT NULL DEFAULT 'received',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE field_agent_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_applications" ON field_agent_applications FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE POLICY "auth_select_applications" ON field_agent_applications FOR SELECT
TO authenticated USING (true);

CREATE POLICY "auth_update_applications" ON field_agent_applications FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_delete_applications" ON field_agent_applications FOR DELETE
TO authenticated USING (true);

-- Storage bucket for document uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'field-agent-documents',
  'field-agent-documents',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "anon_upload_field_agent_docs" ON storage.objects FOR INSERT
TO anon, authenticated WITH CHECK (bucket_id = 'field-agent-documents');

CREATE POLICY "public_read_field_agent_docs" ON storage.objects FOR SELECT
TO anon, authenticated USING (bucket_id = 'field-agent-documents');
