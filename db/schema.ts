import { boolean, integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

const id = () => uuid('id').defaultRandom().primaryKey();
const audit = { createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(), updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull() };
export const roles = pgTable('roles', { id: id(), name: text('name').notNull().unique(), ...audit });
export const users = pgTable('users', { id: id(), email: text('email').notNull().unique(), passwordHash: text('password_hash').notNull(), name: text('name').notNull(), active: boolean('active').default(true).notNull(), ...audit });
export const leads = pgTable('leads', { id: id(), name: text('name'), company: text('company'), email: text('email'), phone: text('phone'), whatsapp: text('whatsapp'), country: text('country'), product: text('product'), message: text('message'), source: text('source'), status: text('status').default('new').notNull(), score: integer('score').default(0).notNull(), ownerId: uuid('owner_id'), metadata: jsonb('metadata').default({}).notNull(), ...audit });
export const customers = pgTable('customers', { id: id(), company: text('company').notNull(), country: text('country'), industry: text('industry'), level: text('level').default('C').notNull(), ownerId: uuid('owner_id'), ...audit });
export const followUps = pgTable('follow_ups', { id: id(), leadId: uuid('lead_id'), customerId: uuid('customer_id'), title: text('title').notNull(), dueAt: timestamp('due_at', { withTimezone: true }), status: text('status').default('pending').notNull(), priority: text('priority').default('normal').notNull(), ownerId: uuid('owner_id'), ...audit });
export const products = pgTable('products', { id: id(), name: text('name').notNull(), slug: text('slug').notNull().unique(), sku: text('sku'), status: text('status').default('draft').notNull(), ...audit });
export const contentPosts = pgTable('content_posts', { id: id(), type: text('type').notNull(), title: text('title').notNull(), slug: text('slug').notNull().unique(), status: text('status').default('draft').notNull(), content: text('content'), ...audit });
export const forms = pgTable('forms', { id: id(), name: text('name').notNull(), type: text('type').notNull(), settings: jsonb('settings').default({}).notNull(), active: boolean('active').default(true).notNull(), ...audit });
export const seoPages = pgTable('seo_pages', { id: id(), path: text('path').notNull().unique(), title: text('title'), description: text('description'), canonical: text('canonical'), schema: jsonb('schema').default({}).notNull(), ...audit });
export const geoQueries = pgTable('geo_queries', { id: id(), query: text('query').notNull(), active: boolean('active').default(true).notNull(), ...audit });
