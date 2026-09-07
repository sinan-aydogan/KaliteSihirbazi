<?php

namespace App\Enums\Document;

enum DocumentActivityAction: string
{
    case Created = 'created';
    case Updated = 'updated';
    case Deleted = 'deleted';
    case VersionCreated = 'version_created';
    case SubmittedForReview = 'submitted_for_review';
    case Reviewed = 'reviewed';
    case Approved = 'approved';
    case Rejected = 'rejected';
    case Obsoleted = 'obsoleted';
    case Acknowledged = 'acknowledged';
    case AuthorityGranted = 'authority_granted';
    case AuthorityRevoked = 'authority_revoked';
    case RevisionRequested = 'revision_requested';
    case RevisionRequestAccepted = 'revision_request_accepted';
    case RevisionRequestRejected = 'revision_request_rejected';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::Created => 'Döküman oluşturuldu',
            self::Updated => 'Döküman güncellendi',
            self::Deleted => 'Döküman silindi',
            self::VersionCreated => 'Yeni revizyon oluşturuldu',
            self::SubmittedForReview => 'İncelemeye gönderildi',
            self::Reviewed => 'İncelendi',
            self::Approved => 'Onaylandı ve yayınlandı',
            self::Rejected => 'Reddedildi',
            self::Obsoleted => 'Yürürlükten kaldırıldı',
            self::Acknowledged => 'Okundu olarak işaretlendi',
            self::AuthorityGranted => 'Yetki verildi',
            self::AuthorityRevoked => 'Yetki kaldırıldı',
            self::RevisionRequested => 'Revizyon talep edildi',
            self::RevisionRequestAccepted => 'Revizyon talebi kabul edildi',
            self::RevisionRequestRejected => 'Revizyon talebi reddedildi',
            self::Cancelled => 'Döküman iptal edildi',
        };
    }
}
