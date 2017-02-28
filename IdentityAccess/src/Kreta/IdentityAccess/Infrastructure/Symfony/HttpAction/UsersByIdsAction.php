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

namespace Kreta\IdentityAccess\Infrastructure\Symfony\HttpAction;

use Kreta\IdentityAccess\Application\Query\UsersOfIdsQuery;
use Kreta\SharedKernel\Application\QueryBus;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class UsersByIdsAction
{
    private $queryBus;

    public function __construct(QueryBus $queryBus)
    {
        $this->queryBus = $queryBus;
    }

    public function __invoke(Request $request) : JsonResponse
    {
        $ids = explode(',', $request->query->get('ids'));

        $this->queryBus->handle(
            new UsersOfIdsQuery($ids),
            $result
        );

        return new JsonResponse($result);
    }
}
