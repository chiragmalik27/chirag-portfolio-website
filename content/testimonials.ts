export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
}

// Per Rule 9 & Rule 15: Never fake testimonials or metrics.
// When real client testimonials are provided, add them to this array and the Proof section will automatically render.
export const testimonials: Testimonial[] = [];
