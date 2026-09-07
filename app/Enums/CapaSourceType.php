<?php

namespace App\Enums;

enum CapaSourceType: string
{
    case DocumentRevisionRequest = 'document_revision_request';
    case AuditFinding = 'audit_finding';
    case CustomerComplaint = 'customer_complaint';
    case Internal = 'internal';
    case Other = 'other';
}
