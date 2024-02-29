import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { Fragment } from '@wordpress/element';



/**
 * Edit component for the custom block.
 * This component provides an interface to select an icon from a predefined list.
 * @param {object} props - Component props.
 * @param {object} props.attributes - Block attributes.
 * @param {Function} props.setAttributes - Function to set block attributes.
 */
const Edit = ({ attributes, setAttributes }) => {
    // Destructure attributes
    const { selectedIcon } = attributes;

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Predefined icon options
    const iconOptions = [
        { value: 'fa-coffee', label: 'fa-coffee' },
        { value: 'fa-filter', label: 'Icon 2' },
        { value: 'fa-icon3', label: 'Icon 3' },
    ];

    // Toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Handle icon selection
    const handleSelectIcon = (value) => {
        setAttributes({ selectedIcon: value });
        toggleModal();
    };

    // Render block editor UI
    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Icon Settings', 'text-domain')}>
                    {/* Select control for choosing an icon */}
                    <SelectControl
                        label={__('Select Icon', 'text-domain')}
                        value={selectedIcon}
                        options={iconOptions}
                        onChange={(value) => setAttributes({ selectedIcon: value })}
                        onFocus={toggleModal}
                    />
                </PanelBody>
            </InspectorControls>
            {/* Display selected icon */}
            <div className="selected-icon">
                <i className={`fa ${selectedIcon}`} />
            </div>
            {/* Modal for selecting an icon */}
            {isModalOpen && (
                <Modal
                    title={__('Select Icon', 'text-domain')}
                    onRequestClose={toggleModal}
                >
                    <div>
                        {/* Render buttons for each icon option */}
                        {iconOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelectIcon(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </Modal>
            )}
        </Fragment>
    );
};

export default Edit;
