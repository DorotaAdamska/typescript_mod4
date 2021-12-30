import express, { Router } from 'express';
 
export interface Route {
    path: string;
    routes: express.Router;
}