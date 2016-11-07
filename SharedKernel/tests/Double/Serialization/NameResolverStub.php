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

namespace Kreta\SharedKernel\Tests\Double\Serialization;

use Kreta\SharedKernel\Serialization\NameResolver;

class NameResolverStub extends NameResolver
{
    protected function map() : array
    {
        return [
          'Fully\Qualified\Class\Name' => 'dummy_name',
        ];
    }
}