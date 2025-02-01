// User Schema
export const user = {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      { name: 'userId', type: 'string', title: 'User ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'phone', type: 'string', title: 'Phone' },
      { 
        name: 'role', 
        type: 'string', 
        title: 'Role', 
        options: { list: ['client', 'admin', 'visitor'] } 
      },
      { name: 'password', type: 'string', title: 'Password' },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
      { name: 'updatedAt', type: 'datetime', title: 'Updated At' },
    ],
  };
  
  
  // Project Schema
  export const project =  {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
      { name: 'projectId', type: 'string', title: 'Project ID' },
      { name: 'userId', type: 'reference', title: 'User ID', to: [{ type: 'user' }] },
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'description', type: 'text', title: 'Description' },
      { 
        name: 'status', 
        type: 'string', 
        title: 'Status', 
        options: { list: ['Planning', 'In Development', 'Completed'] } 
      },
      { name: 'startDate', type: 'datetime', title: 'Start Date' },
      { name: 'endDate', type: 'datetime', title: 'End Date' },
      { name: 'milestones', type: 'array', title: 'Milestones', of: [{ type: 'string' }] },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
      { name: 'updatedAt', type: 'datetime', title: 'Updated At' },
    ],
  };
  
  // Service Schema
  export const service = {
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
      { name: 'serviceId', type: 'string', title: 'Service ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'pricing', type: 'string', title: 'Pricing' },
      { 
        name: 'category', 
        type: 'string', 
        title: 'Category', 
        options: { list: ['Development', 'Marketing', 'Design'] } 
      },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
      { name: 'updatedAt', type: 'datetime', title: 'Updated At' },
    ],
  };
  
  // Porfolio Schema
  export const portfolio = {
    name: 'portfolio',
    type: 'document',
    title: 'Portfolio',
    fields: [
      { name: 'portfolioId', type: 'string', title: 'Portfolio ID' },
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'images', type: 'array', title: 'Images', of: [{ type: 'image' }] },
      { name: 'clientName', type: 'string', title: 'Client Name' },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
      { name: 'updatedAt', type: 'datetime', title: 'Updated At' },
    ],
  };

  // Contact Shema
  export const contactMessages = {
    name: 'contactMessages',
    type: 'document',
    title: 'Contact Messages',
    fields: [
      { name: 'messageId', type: 'string', title: 'Message ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'phone', type: 'string', title: 'Phone' },
      { name: 'message', type: 'text', title: 'Message' },
      { name: 'status', type: 'string', title: 'Status' },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
    ],
  };
  
  // Blog Services
  export const blogPosts = {
    name: 'blogPosts',
    type: 'document',
    title: 'Blog Posts',
    fields: [
      { name: 'postId', type: 'string', title: 'Post ID' },
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'content', type: 'text', title: 'Content' },
      { name: 'authorId', type: 'reference', to: [{ type: 'user' }], title: 'Author ID' },
      { name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
      { name: 'updatedAt', type: 'datetime', title: 'Updated At' },
    ],
  };
  
  // FAQS Schema
  export const faqs = {
    name: 'faqs',
    type: 'document',
    title: 'FAQs',
    fields: [
      { name: 'faqId', type: 'string', title: 'FAQ ID' },
      { name: 'question', type: 'string', title: 'Question' },
      { name: 'answer', type: 'text', title: 'Answer' },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
      { name: 'updatedAt', type: 'datetime', title: 'Updated At' },
    ],
  };
  
  // Job Listing Schema
  export const jobListings = {
    name: 'jobListings',
    type: 'document',
    title: 'Job Listings',
    fields: [
      { name: 'jobId', type: 'string', title: 'Job ID' },
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'requirements', type: 'text', title: 'Requirements' },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
      { name: 'updatedAt', type: 'datetime', title: 'Updated At' },
    ],
  };
  
  // Job Application Schema
  export const jobApplications = {
    name: 'jobApplications',
    type: 'document',
    title: 'Job Applications',
    fields: [
      { name: 'applicationId', type: 'string', title: 'Application ID' },
      { name: 'jobId', type: 'reference', to: [{ type: 'jobListings' }], title: 'Job ID' },
      { name: 'applicantId', type: 'reference', to: [{ type: 'user' }], title: 'Applicant ID' },
      { name: 'resume', type: 'file', title: 'Resume' },
      { name: 'status', type: 'string', title: 'Status' },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
    ],
  };