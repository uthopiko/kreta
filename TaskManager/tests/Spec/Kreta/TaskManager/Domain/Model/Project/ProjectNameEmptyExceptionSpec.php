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

namespace Spec\Kreta\TaskManager\Domain\Model\Project;

use Kreta\TaskManager\Domain\Model\Project\ProjectNameEmptyException;
use PhpSpec\ObjectBehavior;

class ProjectNameEmptyExceptionSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(ProjectNameEmptyException::class);
        $this->shouldHaveType(\Exception::class);
    }

    function it_should_return_message()
    {
        $this->getMessage()->shouldReturn('Project name must not be empty');
    }
}
