<?php

namespace App\Enums;

enum ProblemSourceType: string
{
    case AuditFinding = 'audit_finding';
    case CustomerComplaint = 'customer_complaint';
    case InternalObservation = 'internal_observation';
    case Supplier = 'supplier';
    case RiskRealization = 'risk_realization';
    case Other = 'other';
}
