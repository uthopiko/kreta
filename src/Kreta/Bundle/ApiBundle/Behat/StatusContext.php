<?php

/**
 * This file belongs to Kreta.
 * The source code of application includes a LICENSE file
 * with all information about license.
 *
 * @author benatespina <benatespina@gmail.com>
 * @author gorkalaucirica <gorka.lauzirika@gmail.com>
 */

namespace Kreta\Bundle\ApiBundle\Behat;

use Behat\Gherkin\Node\TableNode;
use Kreta\Bundle\CoreBundle\Behat\Abstracts\AbstractContext;

/**
 * Class StatusContext.
 *
 * @package Kreta\Bundle\ApiBundle\Behat
 */
class StatusContext extends AbstractContext
{
    /**
     * Populates the database with statuses.
     *
     * @param \Behat\Gherkin\Node\TableNode $statuses The statuses
     *
     * @return void
     *
     * @Given /^the following statuses exist:$/
     */
    public function theFollowingStatusesExist(TableNode $statuses)
    {
        $manager = $this->getContainer()->get('doctrine')->getManager();

        foreach ($statuses as $statusData) {
            $workflow = $this->getContainer()->get('kreta_workflow.repository.workflow')
                ->findOneBy(['name' => $statusData['workflow']]);

            $status = $this->getContainer()->get('kreta_workflow.factory.status')->create($statusData['name']);
            $status->setColor($statusData['color']);
            $status->setName($statusData['name']);
            $status->setWorkflow($workflow);

            $metadata = $manager->getClassMetaData(get_class($status));
            $metadata->setIdGenerator(new \Doctrine\ORM\Id\AssignedGenerator());
            $metadata->setIdentifierValues($status, ['id' => $statusData['id']]);

            $manager->persist($status);
        }

        $manager->flush();
    }
}
