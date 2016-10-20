<?php

/*
 * This file is part of the Kreta package.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace Kreta\TaskManager\Domain\Model\Organization;

use Kreta\SharedKernel\Domain\Model\DomainEvent;
use Kreta\TaskManager\Domain\Model\User\UserId;

class OwnerRemoved implements DomainEvent
{
    private $organizationId;
    private $userId;
    private $occurredOn;

    public function __construct(OrganizationId $organizationId, UserId $userId)
    {
        $this->organizationId = $organizationId;
        $this->userId = $userId;
        $this->occurredOn = new \DateTimeImmutable();
    }

    public function organizationId() : OrganizationId
    {
        return $this->organizationId;
    }

    public function userId() : UserId
    {
        return $this->userId;
    }

    public function occurredOn() : \DateTimeInterface
    {
        return $this->occurredOn;
    }
}
