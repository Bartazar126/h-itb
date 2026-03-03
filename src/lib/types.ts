export interface AssistResponse {
  summary:   string;
  reasoning: string[];
  products:  { name: string; category: string; desc: string; href: string }[];
  standards: string[];
  followUp:  string;
}
